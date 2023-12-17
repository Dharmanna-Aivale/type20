<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
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
            break;
        }
    }

    if (!found) {
    
        out.println("<script>");
        out.println("Swal.fire({");
        out.println("    icon: 'error',");
        out.println("    title: 'Invalid Credentials',");
        out.println("    text: 'Please enter valid email and password.',");
        out.println("    showConfirmButton: true");
        out.println("}).then((result) => {");
        out.println("    window.location.href = '../index.html';");
        out.println("});");
        out.println("</script>");
    } else {
  
        response.sendRedirect("home.html");
    }

} catch (Exception e) {
    e.printStackTrace();
    out.println("Error: " + e.getMessage());
}
%>
</body>
</html>
