import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Modules!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text='Module 1'
                        label="Adventure"
                        path="/module-1"
                        />
                        <CardItem 
                        src="images/img-2.jpg"
                        text='Module 2'
                        label="Adventure"
                        path="/module-2"
                        />
                        <CardItem 
                        src="images/img-1.jpg"
                        text='Module 3'
                        label="Adventure"
                        path="/module-3"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-3.jpg"
                        text='Module 4'
                        label="Adventure"
                        path="/mod_test"
                        />
                        <CardItem 
                        src="images/img-4.jpg"
                        text='Module 5'
                        label="Adventure"
                        path="/modules"
                        />
                        <CardItem 
                        src="images/img-5.jpg"
                        text='Module 6'
                        label="Adventure"
                        path="/modules"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-6.jpg"
                        text='Module 7'
                        label="Adventure"
                        path="/modules"
                        />
                        <CardItem 
                        src="images/img-7.jpg"
                        text='Module 8'
                        label="Adventure"
                        path="/modules"
                        />
                        <CardItem 
                        src="images/img-1.jpg"
                        text='Module 9'
                        label="Adventure"
                        path="/modules"
                        />
                        <CardItem 
                        src="images/img-8.jpg"
                        text='Module 10'
                        label="Adventure"
                        path="/modules"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
