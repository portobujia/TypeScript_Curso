(() => {

    const fullName = (firstName: string, ...restArgs: string[]): string => {

        return `${firstName} ${restArgs.join('')}`
    }

    const superman = fullName('Clarl', 'Joseph', 'Herrera');

    console.log({ superman });

})()