type AdvisorApiResponse = {
  id: string
  full_name: string
  image_url: string
  price: number
}

type Advisor = {
  id: string;
  fullName: string;
  imageUrl: string;
  price: number;
}

type AvailabilityApiResponse = {
  callable: string
  chatable: string
}

type Availability = {
  callable: boolean
  chatable: boolean
}