import React from "react";

const Slang = props => (
      <div className="slang__info">
        {
          props.definition && <p className="slang__key">Definition: <span className="slang__value">{props.definition}</span>
          </p>
        }
        {
          props.example && <p className="slang__key">Example: <span className="slang__value">{props.example}</span>
          </p>
        }
                {
          props.permalink && <p className="slang__key">Link: <span className="slang__value"><a href="{props.permalink}">{props.permalink}</a></span>
          </p>
        }
        {
          props.error && <p className="slang__error">{ props.error }</p>
        }
      </div>
    );

export default Slang;