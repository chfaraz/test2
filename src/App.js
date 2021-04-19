import React, { useState, useEffect, useRef } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { CSVLink, CSVDownload } from 'react-csv';
import regexifyString from 'regexify-string';

function App() {
    const [popup, setPopup] = useState(false);
    const [button, setButton] = useState(false);
    const [error, setError] = useState(false);
    const [state, setState] = useState([]);
    const [text, setText] = useState('');
    const [key, setKey] = useState('');
    const [selection, setSelection] = useState('');
    const [paragraph, setParagraph] = useState(
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque equat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, eque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
    );
    useEffect(() => {
        var x = '';
        state.forEach((state) => {
            if (state.selectedText === selection) {
                x = state.writtenText;
                console.log(x);
            }
        });
    }, [selection, state]);

    useEffect(() => {
        console.log(state);
    }, [state]);

    function useOutsideClick(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    if (!selection) {
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
    const closePopup = () => {
        setPopup(false);
        setText('');
        setError(false);
    };
    const setData = (e) => {
        var d = new Date();
        if (text !== '') {
            if (state.length !== 0) {
                state.forEach((data, index) => {
                    if (selection === data.selectedText) {
                        //     delete state[index]
                        //    const newState= state.filter(function (el) {
                        //         return el != null;
                        //       });
                        //       setState(newState)
                        let temp_state = [...state];
                        let temp_element = { ...temp_state[index] };
                        temp_element.writtenText = text;
                        temp_state[index] = temp_element;
                        setState(temp_state);
                    } else {
                        setState(
                            state.concat({
                                uuid: d.getTime() + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100),
                                writtenText: text,
                                selectedText: selection,
                            })
                        );
                    }
                });
            } else if (state.length === 0) {
                setState(
                    state.concat({
                        uuid: d.getTime() + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100),
                        writtenText: text,
                        selectedText: selection,
                    })
                );
            }

            setPopup(false);
        } else {
            console.log('please enter some text');
            setError(true);
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
        setError(false);
    };

    const hover = (e) => {
        let data = state.map((state) => {
            return highlight.map((highlight) => {
                return state.selectedText === highlight ? state.writtenText : null;
            });
        });
        console.log(data.join(''));
        console.log(e.clientX, e.clientY);
    };
    //paragraph.match(/h/g);

    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);
    const popupDiv = (
        <div id="popup">
            {/* <h2>enter some text</h2>
            <textarea value={text} onChange={(e) => handleChange(e)}></textarea>
            <div className="buttons">
                <Button variant="contained" color="secondary" onClick={() => setPopup(false)}>
                    Close
                </Button>
                <Button variant="contained" color="primary" onClick={(e) => setData(e)}>
                    Add
                </Button>
            </div> */}
            <Card className="">
                <CardContent>
                    {/* <Typography className="" color="textSecondary" gutterBottom>
                        enter some text
                    </Typography> */}
                    <TextField id="outlined-multiline-static" helperText={error ? "Can't be empty" : null} error={error} onChange={(e) => handleChange(e)} label="Enter Some Text" multiline rows={4} defaultValue="" variant="outlined" />
                </CardContent>
                <CardActions>
                    <div className="buttons">
                        <Button variant="contained" color="secondary" onClick={closePopup}>
                            Close
                        </Button>
                        <Button variant="contained" color="primary" onClick={(e) => setData(e)}>
                            Add
                        </Button>
                    </div>
                </CardActions>
            </Card>
        </div>
    );
    const highlight = state.map((state) => {
        return state.selectedText;
    });
    var values = highlight.join('|');

    return (
        <div className="App">
            <h1>Select And Mark Some Text</h1>
            <div className="">
                <div id="ele2" className="text" onMouseUp={(e) => mouseUp(e)}>
                    <span>
                        {/* 
                    {' '}
                        {parts.map((part, i) =>
                            part.toLowerCase() === values.toLowerCase() ? (
                                <span key={i} style={{ fontWeight: 'bold', background: 'yellow' }} onMouseOver={hover}>
                                    {part}
                                </span>
                            ) : (
                                <span key={i}>{part}</span>
                            )
                        )}{' '} */}

                        {highlight.length !== 0
                            ? regexifyString({
                                  pattern: new RegExp(`(${values})`, 'gi'),
                                  decorator: (highlight, index) => {
                                      return (
                                          <span key={index} style={{ fontWeight: 'bold', background: 'yellow' }} onMouseOver={(e) => hover(e)}>
                                              {highlight}
                                          </span>
                                      );
                                  },
                                  input: paragraph,
                              })
                            : paragraph}
                    </span>
                    <div ref={wrapperRef} id="aa" onClick={(e) => clicked(e)}>
                        <Button variant="contained" color="secondary">
                            +
                        </Button>
                    </div>
                </div>
                {popup ? popupDiv : null}
                <Button variant="contained" color="secondary">
                    <CSVLink data={state}>Download</CSVLink>
                </Button>
            </div>
        </div>
    );
}

export default App;
