<%-- 
    Document   : next
    Created on : Oct 1, 2023, 8:40:43 AM
    Author     : admin
--%>

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
       String fname=request.getParameter("fname");
       String lname=request.getParameter("lname");
       String dob=request.getParameter("dob");
       String gender=request.getParameter("gender");
       String qualif=request.getParameter("qualif");
       String phone=request.getParameter("phone");
       String email=request.getParameter("email");
       String pass=request.getParameter("pass");
       String cpass=request.getParameter("cpass");
       try {
        Class.forName("org.apache.derby.jdbc.ClientDriver");
      Connection con = DriverManager.getConnection("jdbc:derby://localhost:1527/finger_strike", "root", "admin");

    PreparedStatement pstmt = con.prepareStatement("insert into reg_DB (fname, lname, dob, gender, qualif, phone, email, pass, cpass) values(?,?,?,?,?,?,?,?,?)");

     
     pstmt.setString(1, fname);
     pstmt.setString(2, lname);
     pstmt.setString(3, dob);
     pstmt.setString(4, gender);
     pstmt.setString(5, qualif);
     pstmt.setString(6, phone);
     pstmt.setString(7, email);
     pstmt.setString(8, pass);
     pstmt.setString(9, cpass);
     pstmt.executeUpdate();
       con.close();
     response.sendRedirect("../index.html");
   
    
               
           } catch (Exception e) {
               e.printStackTrace();
               out.println("Error: " + e.getMessage());
           }
       
  %>
  
  

    </body>
</html>
