


type ParseDataArrayProps = [PageDataProps, PageContentSectionType];

const parseData = ([pageContent, section]: ParseDataArrayProps) => {
    console.log(pageContent)
    return pageContent[section]
}

export default parseData