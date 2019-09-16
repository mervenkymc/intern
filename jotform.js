wp.blocks.registerBlockType('jotform/jotform', {
    title: 'JotForm',
    icon: 'smiley',
    category: 'common',
    attributes: {
        content: {type: 'string'},
    },
    edit: function(props) {

        function updateContent(event) {
            props.setAttributes({content: event.target.value})
        }


        // <script src='https://jotform.com/jsform/92440898270969?redirect=1'</script>

        return wp.element.createElement(
            "input",
            {type:"text", onChange: updateContent}, null)
        },
    save: function(props) {
        return wp.element.createElement(
            "script",
            { src: 'https://jotform.com/jsform/'+props.attributes.content+'?redirect=1' }
        );
    }
})



