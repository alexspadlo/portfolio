import React from 'react'

// const emailAddress = 'alexspadlo'

const navSchema = {
    title: 'Aleksandra Spadlo Portfolio',
    socials: [
        {
            url: "https://www.instagram.com/kapirotka/",
            icon: "fa-instagram"
        },
        {
            url: "https://www.linkedin.com/in/alexandra-spadlo/",
            icon: "fa-linkedin-in",
            hasMar: true
        },
        {
            url: "https://www.behance.net/alexandraspadlo",
            icon: "fa-behance",
            hasMar: true
        }
    ],
    contSchema: {
        label: 'CONTACT',
        dropdown: [
            {
                label: <span>alexspadlo@gmail.com <i className="fas fa-envelope-open-text"/></span>,
                // action: window.location.href = `mailto: ${emailAddress}`,
            },
        ],
    }
}

export default navSchema