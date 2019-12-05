import React from 'react';
import './App.css';
import Element from '/home/viktor/Desktop/react/testreact/src/Element/Element'

const itemList = [
    {
        id: 1,
        name: 'Vova'
    },
    {
        id: 2,
        name: 'Vanya'
    },
    {
        id: 3,
        name: 'Petya'
    }
];


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Element item={10}>

                </Element>
                {itemList.map((item, i) => {
                    return <Element item={item.name}
                                       key={item.id}
                    >
                        children: {'info about ' + item.name}
                    </Element>
                })}


            </header>

        </div>
    );
}


export default App;
