import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import FirstMethod from './firstMethod';
import SecondMethod from './secondMethod';

function App() {
    const [popup, setPopup] = useState(false);
    const [button, setButton] = useState(false);
    const [state, setState] = useState([]);
    const [text, setText] = useState('');
    const [key, setKey] = useState('');
    const [selection, setSelection] = useState('');
    console.log(state);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    if(!selection){
                        var ele = document.getElementById('aa');
                        ele.style.display = 'none';
                    }
                }
            }

            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }

    // push to github and eploy to github pages
    const mouseUp = function (e) {
        var aaa = document.getElementById('aa');
        var x = e.clientX;
        var y = e.clientY;
        var selection;
        var p = '';
        selection = window.getSelection();
        if (!popup) {
            p = selection.toString();
            setSelection(p);
        }
        // selection.toString() !== '' && alert(selection.toString() + e.pageX + '/' + e.pageY);
        if (p.length > 0 && !popup) {
            aaa.style.display = 'block';
            aaa.style.top = y - 100 + 'px';
            aaa.style.left = x - 90 + 'px';
        }
        setKey(p);
    };
    const clicked = (e) => {
        setPopup(true);
        var ele = document.getElementById('aa');
        ele.style.display = 'none';
        // e.stopPropagation();
    };
    const setData = (e) => {
        console.log(text);
        console.log(key);
        var d = new Date();
        if (text !== '') {
            setState(
                state.concat({
                    uuid: d.getTime() + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100),
                    writtenText: text,
                    selectedText: selection,
                })
            );

            setPopup(false);
        } else {
            console.log('please enter some text');
        }
        var ele = document.getElementById('aa');
        ele.style.display = 'none';
        setText('');
    };
    // const hideButton = (e) => {
    //     var ele = document.getElementById('aa');
    //     ele.style.display = 'none';
    //     e.stopPropagation();
    // };

    const handleChange = (e) => {
        setText(e.target.value);
    };
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const popupDiv = (
        <div id="popup">
            <h2>enter some text</h2>
            <textarea value={text} onChange={(e) => handleChange(e)}></textarea>
            <div className="buttons">
                <Button variant="contained" color="secondary" onClick={() => setPopup(false)}>
                    Close
                </Button>
                <Button variant="contained" color="primary" onClick={(e) => setData(e)}>
                    Add
                </Button>
            </div>
        </div>
    );
    return (
        <div className="App">
            <h1>Select And Mark Some Text</h1>
            <div className="">
                <div id="ele2" className="text" onMouseUp={(e) => mouseUp(e)}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque equat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
                        id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, eque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam
                        sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                    </p>
                    <div ref={wrapperRef} id="aa" onClick={(e) => clicked(e)}>
                        <Button variant="contained" color="secondary">
                            +
                        </Button>
                    </div>
                </div>
                {popup ? popupDiv : null}
            </div>
        </div>
    );
}

export default App;
