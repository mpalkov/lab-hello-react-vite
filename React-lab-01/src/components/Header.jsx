import './Header.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <section id='header'>
            <Navbar />
            <div id='header-content'>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
                <button id='header-btn'>Awesome!</button>
            </div>
        </section>
    );
}

export default Header;