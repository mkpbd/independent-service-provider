import React from 'react';
import {LinkProps, useResolvedPath, useMatch, Link} from 'react-router-dom'




const ActiveRoute =({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "Red" : "black" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </div>
    );
  }
  
  export default ActiveRoute;