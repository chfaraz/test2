import { useState } from 'react';

function SecondMethod() {
    const [popup, setPopup] = useState(false);
    const [state, setState] = useState([]);
    const [text, setText] = useState('');
    const [key, setKey] = useState('');
    const [selection, setSelection] = useState('');
    console.log(state);

    // push to github and eploy to github pages
    const mouseUp = function (e) {
        var aaa = document.getElementById('aa');
        var x = e.clientX;
        var y = e.clientY;
        var selection;

        selection = window.getSelection();
        var p = selection.toString();

        setSelection(p);
        // selection.toString() !== '' && alert(selection.toString() + e.pageX + '/' + e.pageY);
        if (p.length > 0) {
            aaa.style.display = 'block';
            aaa.style.top = y - 200 + 'px';
            aaa.style.left = x - 20 + 'px';
        }
        setKey(p);
    };
    const clicked = () => {
        setPopup(true);
        var ele = document.getElementById('aa');
        ele.style.display = 'none';
    };
    const setData = (e) => {
        console.log(text);
        console.log(key);
        var d = new Date();
        setState(
            state.concat({
                uuid: d.getTime() + Math.floor(Math.random() * 100),
                writtenText: text,
                selectedText: selection,
            })
        );

        setPopup(false);
        var ele = document.getElementById('aa');
        ele.style.display = 'none';
        setText('');
    };
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const popupDiv = (
        <div id="popup">
            <h1>enter some text</h1>
            <textarea value={text} onChange={(e) => handleChange(e)}></textarea>
            <button onClick={() => setPopup(false)}>Close</button>
            <button onClick={(e) => setData(e)}>Add</button>
        </div>
    );
    return (
        <div className="container mx-auto">
            <div id="ele2" className="text" onMouseUp={(e) => mouseUp(e)}>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque equat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, eque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
                    amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </p>
                <button id="aa" onClick={clicked}>
                    +
                </button>
            </div>
            {popup ? popupDiv : null}
        </div>
    );
}

export default SecondMethod;
