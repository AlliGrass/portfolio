
const parseData = ([pageContent, section]: any) => {
    console.log(JSON.parse(pageContent.value)[section])
    return JSON.parse(pageContent.value)[section]
}

export default parseData