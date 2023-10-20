import React from 'react';


class Home extends React.Component {
    render() {
        return (
             <div className='home-component'>
                <h1>Haddis Fanta</h1>
                <h3>Web Developer and Designer</h3>
                <p>Until the 16th century, the Solomonic Emperors of Ethiopia usually had no fixed capital town, but instead lived in tents in temporary royal camps as they moved around their realms while their family, bodyguard and retinue devoured surplus crops and cut down nearby trees for firewood. One exception to this rule was Debre Berhan, founded by Zara Yaqob in 1456; Tegulet in Shewa was also essentially the capital during the first century of Solomonic rule. Gondar was founded by Emperor Fasilides around the year 1635, and grew as an agricultural and market town.</p>
                <div className='button-container'>
                    <button><span></span>Watch More</button>
                    <button><span></span>Support Me</button>
                </div>
             </div>
        );
    }
}


export default Home;