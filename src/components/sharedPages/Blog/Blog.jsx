import React from "react";
import useTitle from "../../../Titles/useTitle";

const Blog = () => {
  useTitle("blog");
  return (
    <>
      <div className="mt-8">
        <h1 className="text-5xl font-medium">
          Q.1. What is an access token and refresh token ? How do they work and
          where should we store them on the client side?
        </h1>
        <p className="mt-3 text-xl">
          Answer: Access token and Refresh token : A refresh token just helps
          you re-validate a user without them having to re-enter their login
          credentials multiple times. The access token is re-issued, provided
          the refresh token is a valid one requesting permission to access
          confidential resources.
        </p>
      </div>
      <div className="mt-3 mb-2">
        <h1 className="mb-2 text-5xl font-medium">
          Q.2. Compare between SQL and noSQL.
        </h1>
        <div className="grid border lg:grid-cols-2">
          <div className="p-2 border-e">
            <p className="mt-3 text-xl">SQL:</p>
            <p className="mt-3 text-xl">
              Structured Query Language is known as SQL. It is utilized in
              relational database management systems to store and manage data
              (RDMS). It's a common language for relational databases. A user is
              able to build, read, edit, and remove relational databases and
              tables with this tool. SQL is the universal database language used
              by every RDBMS, including MySQL, Informix, Oracle, MS Access, and
              SQL Server.
            </p>
          </div>
          <div className="p-2">
            <p className="mt-3 text-xl">No SQL:</p>
            <p className="mt-3 text-xl">
              Non-SQL or non-relational databases are referred to as NoSQL
              databases. It offers a data storage and retrieval method different
              from the relational databases' tabular relations paradigm. NoSQL
              databases do not use tables to store data.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 mb-2">
        <h1 className="text-5xl font-medium">
          Q.3. What is express js and nest js?
        </h1>
        <p className="mt-3 text-xl">
          Answer: Express.js: express js is a back end web application framework
          for building RESTful APIs with Node.js, released as free and
          open-source software under the MIT License. It is designed for
          building web applications and APIs. It has been called the de facto
          standard server framework for Node.js.
        </p>
        <p className="mt-3 text-xl">
          Answer: Nest-Js: Nest. js is one of the fastest-growing Node. js
          frameworks for building efficient, scalable, and enterprise-grade
          backend applications using Node. js. It is known for producing highly
          testable, maintainable, and scalable applications using modern
          JavaScript and TypeScript.
        </p>
      </div>
      <div className="mt-3 mb-2">
        <h1 className="text-5xl font-medium">
          Q.4. What is mongoDb aggregate and how does it work ?
        </h1>
        <p className="mt-3 text-xl">
          Answer: Aggregation is a way of processing a large number of documents
          in a collection by means of passing them through different stages. The
          stages make up what is known as a pipeline. The stages in a pipeline
          can filter, sort, group, reshape and modify documents that pass
          through the pipeline.
        </p>
      </div>
    </>
  );
};

export default Blog;
