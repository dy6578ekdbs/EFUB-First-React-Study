import React, { useState } from "react";

/* 클래스 컴포넌트 사용 코드
class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConFirmed: false,
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm() {
        this.setState((prevState) => ({
            isConFirmed: !prevState.isConFirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConFirmed}
            >
                {this.state.isConFirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}
*/

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
}

export default ConfirmButton;