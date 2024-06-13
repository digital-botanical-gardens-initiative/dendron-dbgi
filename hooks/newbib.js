
/**
 @params wsRoot: string, root of your current workspace
 @params note: Object with following properties https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/foundation.ts#L66:L66
 @params NoteUtils: utilities for working with notes. [code](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/dnode.ts#L323:L323)
 @params execa: instance of [execa](https://github.com/sindresorhus/execa#execacommandcommand-options)
 @params axios: instance of [axios](https://axios-http.com/docs/example)
 @params _: instance of [lodash](https://lodash.com/docs)
 */
 module.exports = async function ({ wsRoot, note, NoteUtils, execa, axios, _ }) {
    // Prevent making any changes if the note already exists
    if (note.body !== "") {
        return { note };
    }

    let csl = {};
    try {
        const response = await axios({
            url: 'http://localhost:23119/better-bibtex/cayw?format=json',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: {
                "jsonrpc": "2.0",
                "method": "item.export",
                "params": [
                    [note.title],
                    'f4b52ab0-f878-4556-85a0-c7aeedd09dfc' // GUID of translator 'Better CSL JSON'
                ]
            }
        })
        if ("error" in response.data) {
            note.body = `Zotero responded with error code \`${response.data.error.code}\`, message: \`${response.data.error.message}\`\n`;
            return { note };
        }
        csl = JSON.parse(response.data.result[2]); // Skip HTTP response code and content type, get first paper
    } catch (error) {
        note.body = `Importing data from BibTeX failed with error:\n\n\`\`\`\n${error}\n\`\`\`\n`;
        return { note };
    }

    note.title = csl.title;

    var shortAuthor = "";
    if (csl.author.length === 1) {
        shortAuthor = csl.author[0].family;
    } else if (csl.author.length === 2) {
        shortAuthor = csl.author[0].family + " and " + csl.author[1].family;
    } else {
        shortAuthor = csl.author[0].family + " et al.";
    }
    note.desc = shortAuthor + ", " + csl.issued["date-parts"][0][0].toString();

    note.body =
        note.body + `\n## Abstract\n\n${csl.abstract}\n\n## Authors\n\n`;
    for (author of csl.author) {
        note.body = note.body + `- ${author.family}, ${author.given}\n`;
    }

    return { note };
};
