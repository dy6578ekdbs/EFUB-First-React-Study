import React, { useState } from "react";

function SignUp(props) {
    const [name, setName] = useState("");   /* 이름 useState */
    const [gender, setGender] = useState("남자");   /* 성별 useState */

    const handleChangeName = (event) => {   /* 이름 업데이트 함수 */
        setName(event.target.value);
    };

    const handleChangeGender = (event) => { /* 성별 업데이트 함수 */
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* 이름 input 태그*/}
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            {/* 성별 select 태그 */}
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;