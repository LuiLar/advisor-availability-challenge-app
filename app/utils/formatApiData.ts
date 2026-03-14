export function formatApiData(apiData: AdvisorApiResponse[]): Advisor[] {
  return apiData.map(({id, full_name, image_url, price}) => ({
    id,
    fullName: full_name,
    imageUrl: image_url,
    price,
  }))
}

export function formatAvailabilityApiData(apiData: AvailabilityApiResponse): Availability {
  return ({
    callable: apiData.callable === 'true',
    chatable: apiData.chatable === 'true',
  })
}