
/**
 * Define your custom trait behavior in this file by modifying the functions in
 * 'module.exports' below. See
 * https://wiki.dendron.so/notes/EQoaBI8A0ZcswKQC3UMpO/ for examples and
 * documentation.
 *
 * NOTE: This is an alpha feature, so this API may have breaking changes in
 * future releases.
 */

/**
 * @typedef OnCreateContext Properties that can be utilized during note creation
 * @type {object}
 * @property {string} currentNoteName The name of the currently opened Dendron
 * note, or the specified name of the note about to be created
 * @property {string} selectedText Any currently selected text in the editor
 * @property {number} clipboard The current contents of the clipboard
 */

/**
 * @typedef SetNameModifierReturnType Properties that can be utilized during
 * note creation
 * @type {object}
 * @property {string} name The name to use for the note
 * @property {boolean} promptUserForModification if true, the modified name will
 * appear in a lookup control to allow the user to further edit the note name
 * before confirming.
 */

module.exports = {
  OnWillCreate: {
    /**
     * This example sets a prefix of 'planning', and then adds a date hierarchy
     * using the luxon module.
     */
    setNameModifier() {
      // This example sets a prefix of 'planning', and then adds a date
      // hierarchy using the luxon module.
      return {
        name: "open-notebook.dbgi.dtandon." + luxon.DateTime.local().toFormat("yyyy.MM.dd"),
        promptUserForModification: true,
      };
    },
  },
  OnCreate: {
    setTitle(props) {
      // This example will use the currentNoteName property, extract the
      // yyyy.MM.dd date portion of the note name, and then reformat it with
      // dashes.
      return props.currentNoteName.split(".").slice(-3).join("-");
    },
    /**
     * Apply a template to each note. NOTE: If you want to use this code, you
     * will need a note file called `templates.planning-template.md` in your
     * Dendron workspace.
     */
    setTemplate: () => {
      return "templates.open-notebook-dbgi-dtandon";
    },
  },
};