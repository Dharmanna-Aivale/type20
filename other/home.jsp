<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.*" %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
<%
String a = request.getParameter("email");
String b = request.getParameter("pass");
boolean found = false;

try {
    Class.forName("org.apache.derby.jdbc.ClientDriver");
    Connection con = DriverManager.getConnection("jdbc:derby://localhost:1527/finger_strike", "root", "admin");
    Statement st = con.createStatement();
    ResultSet rs = st.executeQuery("select * from reg_DB");

    while (rs.next()) {
        if (rs.getString("email").equals(a) && rs.getString("pass").equals(b)) {
            found = true;
            // Store the user's name in the session
            session.setAttribute("userName", rs.getString("name"));
            break;
        }
    }

    if (!found) {
        out.print("wrong input");
    } else {
        response.sendRedirect("../index.html");
    }

} catch (Exception e) {
    e.printStackTrace();
    out.println("Error: " + e.getMessage());
}
%>
    </body>
</html>
