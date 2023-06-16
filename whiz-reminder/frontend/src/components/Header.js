import './Header.css';

const Header = ({ setModal }) => {
    return (

        <div className="header text-center">
            <h3 className="mt-3">WhizReminder ⏰ </h3>
            <button
                className="btn btn-primary mt-2"
                onClick={() => {
                    setModal(true);
                }}
            >
                Create Reminder 🚀
            </button>
        </div>
    )
}
export default Header;