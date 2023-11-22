const tagNow = () => `[${new Date().toUTCString()}] `;

const appLog = obj => {
  if ( typeof obj === "object" ) {
    console.info( `${tagNow()} ${obj[0]} continue...`  )
    console.log( obj );
  } else {
    console.log( `${tagNow()} ${obj}`  )
  }
};

const appDebug = obj => {
  if ( typeof obj === "object" ) {
    console.debug( `${tagNow()} ${obj[0]} continue...`  )
    console.debug( obj );
  } else {
    console.debug( `${tagNow()} ${obj}`  )
  }
};

module.exports = {
    info: appLog,
    debug: appDebug
};

