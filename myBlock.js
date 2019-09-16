wp.blocks.registerBlockType('my-block/border-box', {
    title: 'Border Box',
    icon: 'admin-customizer',
    category: 'common',
    attributes: {
        content: {type: 'string'},
        color: {type: 'string'},
    },
    edit: function(props) {

        function updateContent(event) {
            props.setAttributes({content: event.target.value})
        }

        function updateColor(value) {
            props.setAttributes({color: value.hex})
        }

        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement(
                "h3",
                null,
                "Title"
            ),
            wp.element.createElement("span", { type: "text", value: props.attributes.content, onChange: updateContent }),
            wp.element.createElement(wp.components.ColorPicker, { color: props.attributes.color, onChangeComplete: updateColor })
            );
        },
    save: function(props) {
        return wp.element.createElement(
            "h3",
            { style: { border: "5px solid " + props.attributes.color } },
            props.attributes.content = subs
        );
    }
})

    var subs=[];
    const HTTP= new XMLHttpRequest();
    const url = "https://api.jotform.com/form/92401940872962/submissions?apiKey=fde7e8b23b98deca49207b9501af4f4f";
    HTTP.open("GET",url);
    HTTP.send();
    HTTP.onreadystatechange=(e)=>{
        if (HTTP.readyState == 4 && HTTP.status == 200) {
            subs=[];
            var req = JSON.parse(HTTP.responseText);
            var content = req.content;
            for (let i = 0; i < content.length; i++) {
                var user = content[i];
                var ans = user['answers'];
                user = [];
                for (let j = 4; j <= Object.keys(ans).length; j++) {
                    if (ans[j].name == "name")
                        user.push(ans[j].prettyFormat);
                    if (ans[j].name == "email")
                        user.push(ans[j].answer);
                    if (ans[j].name == "phoneNumber")
                        user.push(ans[j].prettyFormat);
                }
                subs.push(user);

            }
            console.log();
        }
    };



