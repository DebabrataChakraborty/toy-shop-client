// import ChefNavbar from "../Components/Header/Header";
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer';

const Blog = () => {
    return (
        <>
            <Header />
            <div>
                <h4>Q:What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                <p>Answer: <br />
                    <p className='text-primary'>Access Token:</p>
                    An access token is a credential that is used to access protected resources on behalf of an authenticated user. It is typically a string of characters that represents the authorization granted to the client application. <br />
                    <p className='text-primary'>Refresh Token:</p>
                    A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires. It is typically issued alongside an access token during the initial authentication process.
                    Storing Tokens on the Client-side:
                    On the client-side, access tokens and refresh tokens need to be stored securely to prevent unauthorized access. It is generally recommended to store them in a secure storage mechanism</p>

                <h4>Q:Compare SQL and NoSQL databases?</h4>
                <p>
                    Answer: <br />
                    <span className='text-primary'>SQL Databases:</span>

                    Structured, tabular model with predefined schemas.
                    Enforce rigid schemas and data integrity through ACID properties.
                    Vertical scaling, scaling by adding more resources to a single server.
                    SQL query language for data manipulation.
                    Suitable for complex relationships and transactions. <br />
                    <span className='text-primary'>NoSQL Databases:</span>

                    Flexible, schema-less data model.
                    Designed for horizontal scalability, scaling by adding more servers.
                    Optimized for high-performance, read-heavy workloads.
                    Flexible and agile with dynamic schema updates.
                    Sacrifice strong consistency for high availability and partition tolerance.
                    Suitable for unstructured or evolving data and large-scale distributed systems.
                </p>
                <h4>Q:What is express js? What is Nest JS?</h4>
                <p>
                    Answer: <br />
                    Express.js is a minimalist web application framework for Node.js, providing a simple and flexible way to build web applications and APIs. <br />

                    NestJS is a progressive Node.js framework that builds on top of Express.js, offering a structured and scalable approach to developing server-side applications with TypeScript and incorporating concepts from Angular.


                </p>
                <h4>Q:What is MongoDB aggregate and how does it work?</h4>
                <p>
                    Answer: <br />
                    MongoDB's aggregate is a framework that allows for advanced data processing and analysis in the database. It works by using a pipeline of stages to perform various operations on collections, such as filtering, grouping, sorting, and aggregating data. Each stage in the pipeline transforms the input data and passes it to the next stage. Aggregate expressions can be used to perform calculations and manipulations within stages. Overall, MongoDB's aggregate provides a flexible way to process and analyze data within the database.
                </p>

            </div>
            <Footer />
        </>
    );
};

export default Blog;