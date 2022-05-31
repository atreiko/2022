import { HTTP, HTTPS, ROOT, PEOPLE, PARAM_PAGE } from '../constants/api'

const checkProtocol = url => {
  if (url.indexOf(HTTPS) !== -1) {
    return HTTPS
  }
  return HTTP
}

export const getPeoplePageId = url => {
  const position = url.lastIndexOf(PARAM_PAGE) //: 33 (/?page=1)
  const id = url.slice(position + PARAM_PAGE.length, url.length) //: "/?page=".length

  return Number(id)
}

const getId = (url, category) => {
  const protocol = checkProtocol(url)

  const id = url
    .replace(protocol + ROOT + category, '')   //: /1/
    .replace(/\//g, '')                        //: 1
  return id
}

export const getPeopleId = url => getId(url, PEOPLE)
