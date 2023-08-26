import HeroSection from "../Components/HeroSection"
import Gallery from "../Components/Gallery"
import SpeakerDisplay1 from "../Components/SpeakerDisplay1"
import SpeakerDisplay2 from "../Components/SpeakerDisplay2"
import EarphonesDisplay from "../Components/EarphonesDisplay"
import AboutSection from "../Components/AboutSection"

const Home = () => {


    return (
        <>
            <HeroSection />
            <Gallery />
            <SpeakerDisplay1 />
            <SpeakerDisplay2 />
            <EarphonesDisplay />
            <AboutSection />
            {/* <form onSubmit={handleSubmit}>
                <div className="mb-4 me-3">
                    <label htmlFor="name" className="me-3">Customer Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5 me-3">
                    <label htmlFor="shippingAddress" className="me-3">Shipping Address</label>
                    <input
                        type="text"
                        name="shippingAddress"
                        id="shippingAddress"
                        value={formData.shippingAddress}
                        onChange={handleChange}
                    />
                </div>
                <Table bordered >
                    <thead>
                        <tr>
                            <th>
                                Item
                            </th>
                            <th>
                                Qty
                            </th>
                            <th>
                                Rate
                            </th>
                            <th>
                                Amount
                            </th>
                            <th>
                                <Button color="success">+</Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select
                                    name="orderItems"
                                    id="orderItems"
                                    value={formData.orderItems}
                                    onChange={handleChange}
                                >
                                    <option>Item #1</option>
                                    <option>Item #2</option>
                                    <option>Item #3</option>
                                    <option>Item #4</option>
                                </select>
                            </td>
                            <td>
                                <input type="number" />
                            </td>
                            <td>
                                <input type="number" />
                            </td>
                            <td>
                                <input type="number" />
                            </td>
                            <td>
                                <Button color="danger">X</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <div className="mt-5 d-flex gap-4">
                    <Button color="primary" onClick={handleSubmit}>Add Order</Button>
                    <Link to="/page1">
                        <Button color="secondary">Cancel</Button>
                    </Link>
                </div>
            </form> */}
        </>
    )
}

export default Home