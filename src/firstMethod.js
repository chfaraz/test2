import React, { useState } from 'react';

const FirstMethod = () => {
    const [popup, setPopup] = useState(false);
    const [state, setState] = useState([]);
    console.log(popup);

    const selection = (e) => {
        var selection;

        selection = window.getSelection();
        var p = selection.toString();
        // selection.toString() !== '' && alert(selection.toString() + e.pageX + '/' + e.pageY);
        if (p.length > 1) {
            var ele = document.getElementById('tooltip');

            var sel = window.getSelection();
            var rel1 = document.createRange();
            rel1.selectNode(document.getElementById('cal1'));
            var rel2 = document.createRange();
            rel2.selectNode(document.getElementById('cal2'));
            if (!popup) {
                window.addEventListener('mouseup', function () {
                    if (!sel.isCollapsed) {
                        var r = sel.getRangeAt(0).getBoundingClientRect();
                        var rb1 = rel1.getBoundingClientRect();
                        var rb2 = rel2.getBoundingClientRect();
                        ele.style.top = ((r.bottom - rb2.top) * 100) / (rb1.top - rb2.top) + 'px';
                        // ele.style.left = `${e.clientX}px`;
                        // ele.style.top = `${e.clientY}px`;
                        ele.style.left = ((r.left - rb2.left) * 100) / (rb1.left - rb2.left) + 'px';

                        ele.style.display = 'block';
                    }
                });
            }
            ele.addEventListener('mousedown', function () {
                setPopup(true);
                setTimeout(() => {
                    ele.style.display = 'none';
                }, 400);
            });
            window.addEventListener('mousedown', function () {
                ele.style.display = 'none';
            });
        }
    };
    // push to github and eploy to github pages

    const popupDiv = (
        <div id="popup">
            <h1>enter some text</h1>
            <div>
                <textarea></textarea>
                <div className="flex justify-around">
                    <button onClick={() => setPopup(false)}>Close</button>
                    <button onClick={() => setPopup(false)}>Add</button>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div id="ele2" onMouseUp={(e) => selection(e)}>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </p>
            </div>

            <div id="cal1">&nbsp;</div>
            <div id="cal2">&nbsp;</div>
            <button id="tooltip" onClick={() => console.log('ghsagdj dsahgd')}>
                +
            </button>
            {popup ? popupDiv : null}
        </div>
    );
};

export default FirstMethod;
