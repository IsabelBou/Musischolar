import React from 'react';

const ContentBlock = ({title, description, verovio}) => {
    return (
        <div>
            <h1>
                {title}
            </h1>
            <h3>
                {description}
            </h3>
            <p>
                {verovio}
            </p>
        </div>
    )
};

export default ContentBlock;