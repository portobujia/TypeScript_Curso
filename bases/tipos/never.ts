(() => {

    //El never no debe tener un punto alcanzable
    const error = (message: string): never => {

        throw new Error(message)
    }

    error('Auxilio');

})()