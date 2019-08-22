/**
 * The Widget namespace.
 * @namespace Widget
 */

// you can also use '@class Widget(2)' and omit the @variation tag
/**
 * The Widget class. Defaults to the properties in {@link Widget.properties}.
 * @class
 * @variation 2
 * @param {Object} props - Name-value pairs to add to the widget.
 */
function Widget(props) {}

/**
 * Properties added by default to a new {@link Widget(2)} instance.
 */
Widget.properties = {
    /**
     * Indicates whether the widget is shiny.
     */
    shiny: true,
    /**
     * Indicates whether the widget is metallic.
     */
    metallic: true
};