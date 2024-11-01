

# How to use Zotero to add references on the Digitized Botanical gardens initiative Dendron:

## Zotero installation and setup:
Zotero: https://www.zotero.org/download/.

Now you have to add the "dbgi-bibliography" shared folder on Zotero to access to all the Project references. For this, go to https://www.zotero.org/groups/4613367/dbgi-bibliography, login or register and join the Zotero group. Now you can add your references in the folder to import them on Dendron.

## Mandatory Zotero add-ons installation:
- Better BibTex for Zotero: https://github.com/retorquere/zotero-better-bibtex/releases/download/v6.3.0/zotero-better-bibtex-6.3.0.xpi
- ZotFile: https://github.com/jlegewie/zotfile/releases/download/v5.1.1/zotfile-5.1.1-fx.xpi
- Mdnotes for Zotero: https://github.com/argenos/zotero-mdnotes/releases/download/0.2.0-alpha5/mdnotes-0.2.0-alpha5.xpi

Click on the link, download the add-on file, open Zotero, go to Tools -> Add-ons -> drag and drop the add-on file in the Add-ons Manager -> Install Now

## Set the add-ons settings:

### Better Bibtex for Zotero:
Go in Zotero to Edit -> Better BibteX and follow these settings:
![Better BibteX settings](assets/images/Bibtex_settings.png){max-width : 600px, display: block, margin: 0 auto}

### Zotfile:
Go in Zotero to Tools -> Zotfile Preferences... and follow these settings in the "Renaming Rules" tab:
![Zotfile settings](assets/images/Zotfile_settings.png){max-width : 600px, display: block, margin: 0 auto}

### Mdnotes fo Zotero:
Go in Zotero to Tools -> Mdnotes preferences and follow these settings:
![Mdnotes settings 1](assets/images/Mdnotes_settings_1.png){max-width : 600px, display: block, margin: 0 auto}
![Mdnotes settings 2](assets/images/Mdnotes_settings_2.png){max-width : 600px, display: block, margin: 0 auto}

## References import on Dendron:
1) Just for the first import: Create a folder named "biblio" on your computer and replace "path to "biblio" folder" with the correct pass of the folder.

2) Go on the "dbgi-bibliography" folder in Zotero, select the new added references to export, right click on it -> Better BibTeX -> Refresh BibTeX key -> right click -> Manage Attachments -> Rename and Move -> right click -> mdnotes -> Export to markdown. You now should have the references listed in the "biblio" folder in this format: "authorname_year.md".

3) To configure the import: Go to Visual Studio Code -> ctrl + shift + p -> Dendron: Configure Pod -> dendron.markdown import markdown. Then add the "biblio" folder path after "src:". Normally, some paths are already present, so comment them with "#" to keep the path for the others.

4) For the first and next imports, you just have to repeat the 2nd step and then go to Visual Studio Code -> press ctrl+shift+p -> Dendron: Import Pod -> dendron.markdown and your references present in the "biblio" folder will be imported in the Dendron.

Now you can add theses references in text ensured with double hooks.
