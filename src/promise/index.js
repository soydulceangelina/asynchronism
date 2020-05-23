const somenthingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Yey!')
        }else{
            reject('Nop!');
        }
    })
}

somenthingWillHappen()
    .then(resolve => console.log(resolve))
    .catch(err => console.log(err));

// -------------------------------------------------------------------------

const somenthingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            setTimeout(() => {
                resolve('True')
            }, 3000)
        }else{
            const error = new Error('Nop')
            reject(error);
        }
    });
}

somenthingWillHappen2()
    .then(resolve => console.log(resolve))
    .catch(err => console.error(err));

// ----------------------------------------------------------------------------

Promise.all([somenthingWillHappen(), somenthingWillHappen2()])
    .then(response => {
        console.log('Array of result', response);
    })
    .catch(err => {
        console.error(err);
    });