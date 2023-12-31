import React from 'react';
import Container from '../../Container/Container';
import '@smastrom/react-rating/style.css'
const LanguageCard = ({ language }) => {
    console.log(language)
    return (
        <div>
            <div className='-mx-10 lg:mx-0 scale-90'>
                <div className="card h-80 w-96 bg-base-100 shadow-xl p-5">
                    <figure className="px-10 pt-10">
                        <img src={language.countryImage} alt="Shoes" className=" rounded-3xl scale-75" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-600">{language.language}</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LanguageCard;