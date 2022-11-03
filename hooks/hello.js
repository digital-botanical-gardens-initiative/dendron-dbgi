
/**
 @params wsRoot: string, root of your current workspace
 @params note: Object with following properties https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/foundation.ts#L66:L66
 @params NoteUtils: utilities for working with notes. [code](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/dnode.ts#L323:L323)
 @params execa: instance of [execa](https://github.com/sindresorhus/execa#execacommandcommand-options)
 @params axios: instance of [axios](https://axios-http.com/docs/example)
 @params _: instance of [lodash](https://lodash.com/docs)
 */
 module.exports = async function({wsRoot, note, NoteUtils, execa, _}) {
    note.body = note.body + "hello"
    return {note};
};