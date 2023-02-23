import { render, screen, cleanup } from '@testing-library/react'
import Index from './index'

afterEach(cleanup);

describe('Test Component Campus', () => {
  it('renders a Title', () => {
    const data ={
      "logo": [
        {
          "id": 0,
          "img": "https://cdn.lcieducation.com/~/media%2fimages%2flcieducation%2fcampus-logos%2fLaSalle-College-Montreal.ashx",
          "link": "https://www.lasallecollege.com"
        },
        {
          "id": 1,
          "img": "https://cdn.lcieducation.com/~/media%2fimages%2flcieducation%2fcampus-logos%2fLAB-Horizontal-WHITE.ashx",
          "link": "https://www.languagesacrossborders.com"
        }
      ],
      "name": "Montreal",
      "image": "https://cdn.lcieducation.com/~/media%2fimages%2flcieducation%2flocation-photo%2fbg_montreal.ashx"
    }
    render(<Index key={'test'} content={data} />)

    const Title = screen.getByText(/Montreal/i)

    // @ts-ignore
    expect(Title).toBeInTheDocument()
  })
})