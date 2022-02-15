package dbviajar;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class AgenciaConnection {

	private static final String url = "jdbc://localhost:8081/viajar";
	private static final String user = "root";
	private static final String password = "root";
	
	public static Connection createConnection() {
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("Driver localizado");
			
		} catch(ClassNotFoundException e) {
			System.out.println("Driver não localizado" + e.getMessage());
		}
		
		
		try {
			Connection connection = DriverManager.getConnection(url, user, password);
			System.out.println("Conectado a base de dados");
			return connection;
			
		} catch(SQLException e) {
			System.out.println("Não conectado a base de dados" + e.getMessage());
			return null;
		}
		
	}
	
			
}
