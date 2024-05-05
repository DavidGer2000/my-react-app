import { React, useState } from 'react'
import Reach from './reach'
import reachArray from '../reach.json'
import MyButton from './mybutton'
import 'bootstrap-icons/font/bootstrap-icons.css';




const CraeteGallery = () => {
    const originArray = reachArray;
    const RECH_PER_PAGE = 6;
    const [arr, setArr] = useState(originArray.slice(0,
        RECH_PER_PAGE));
    const [start, setStart] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const [choice, setChoice] = useState("name");
    const [totalPages, setTotalPages] =
        useState(Math.ceil(originArray.length / RECH_PER_PAGE));
    const [filterArr, setFilterArr] = useState(originArray);
    const [activeButton, setActiveButton] = useState(1);
    const [buttonNumber, setButtonNumber] = useState(1);


    const filterArray = () => {
        let newArray = reachArray.filter((item) => {
            if (choice === "name")
                return item.name.toLocaleLowerCase().includes(
                    searchValue.toLocaleLowerCase()
                );
            if (choice === "source")
                return item.source.toLocaleLowerCase().includes(
                    searchValue.toLocaleLowerCase()
                );
            if (choice === "country")
                return item.country.toLocaleLowerCase() ===
                    searchValue.toLocaleLowerCase();
            if (choice === "worth") {
                let temp = item.worth.substring(0, item.source.length
                    - 1);
                temp = temp.replace(",", "").replace("$", "").replace("B", "000000000");
                return Number(temp) >= Number(searchValue);
            }
            return newArray;
        })
        return newArray;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const filterArr = filterArray();
        setArr(filterArr.slice(0, RECH_PER_PAGE));
        setFilterArr(filterArr);
        setTotalPages(Math.ceil(filterArr.length / RECH_PER_PAGE));
    }


    const createPaginationButtons = () => {
        const myButtons = [];
        for (let i = 1; i <= totalPages; i++) {
            myButtons.push(<MyButton key={i} onEach={onEachBtn}
                number={i} activeButton={activeButton}
            />)
        }
        return myButtons;
    };


    const onEachBtn = (pageNum) => {
        const startIndex = (pageNum - 1) * RECH_PER_PAGE;
        const endIndex = startIndex + RECH_PER_PAGE;
        const tempArr = filterArr.slice(startIndex, endIndex);
        setArr(tempArr);
        setStart(startIndex);
        setActiveButton(pageNum);
        setButtonNumber(pageNum);
    };

    const onNextBtn = () => {
        const startIndex = start + RECH_PER_PAGE;
        const tempArr = filterArr.slice(startIndex, startIndex +
            RECH_PER_PAGE);
        setArr(tempArr);
        setStart(startIndex);
        setButtonNumber(buttonNumber + 1);
        setActiveButton(buttonNumber + 1);
    };
    const onBackBtn = () => {
        const startIndex = start - RECH_PER_PAGE;
        const tempArr = filterArr.slice(startIndex, startIndex +
            RECH_PER_PAGE);
        setArr(tempArr);
        setStart(startIndex);
        setButtonNumber(buttonNumber - 1);
        setActiveButton(buttonNumber - 1);
    };
    const createAllReches = (arr) => {
        const compsArr =
            arr.map((item) => {
                return <Reach
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    worth={item.worth}
                    country={item.country}
                    source={item.source}
                    education={item.education}
                />
            });
        return compsArr;
    };
    return (
        <>
                    <form onSubmit={handleSubmit} className='text-center
             w-100 pt-4 mt-0'>
                        <input onChange={(e) =>
                            setSearchValue(e.target.value)} type="text" className=' w-50 my-1 mx-auto '
                        />
                        <select onChange={(e) =>
                            setChoice(e.target.value)} className='my-0 mx-2'>
                            <option value='name'>name</option>
                            <option value='worth' >worth</option>
                            <option value='country'>country</option>
                            <option value='source'>source</option>
                        </select>
                        <button className='btn
btn-warning btn-sm my-0'>Search</button>
                    </form>
                    <div className="container text-center w-100">
                        <div className="container mt-4 mb-4 ">
                            <div className="row justify-content-evenly">
                                {createAllReches(arr)}
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center pb-4 w-100'>
                        <button className='btn btn-dark m-2 '
                            onClick={onBackBtn} disabled={start === 0}>Back</button>
                        {createPaginationButtons()}
                        <button className='btn btn-dark m-2'
                            onClick={onNextBtn} disabled={start + RECH_PER_PAGE >=
                                filterArr.length}>Next</button>
                    </div>
                </>
    )
}
export default CraeteGallery