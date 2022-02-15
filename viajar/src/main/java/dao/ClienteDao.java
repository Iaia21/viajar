package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import controllers.$missing$;
import controllers.ArrayList;
import dbviajar.AgenciaConnection;
import model.Cliente;
import 'ArrayList' (java.util);

public class ClienteDao implements CRUD {
	
	private static Connection connection = AgenciaConnection.createConnection(); 
	private static String sql;
	
	public static void create(Cliente cliente) {
		sql = "INSERT INTO clientes VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		
		try {
			PreparedStatement preparedStatement = connection.prepareStatement(sql);
			
			preparedStatement.setString(1, cliente.getNome());
			preparedStatement.setString(2, cliente.getNascimento());
			preparedStatement.setString(3, cliente.getCpf());
			preparedStatement.setString(4, cliente.getRg());
			preparedStatement.setString(5, cliente.getEndereço());
			preparedStatement.setString(6, cliente.getCep());
			preparedStatement.setString(7, cliente.getCidade());
			preparedStatement.setString(8, cliente.getTelefone());
			preparedStatement.setString(9, cliente.getEmail());
			
			
			preparedStatement.executeUpdate();
			
			System.out.println("--dados inseridos corretamente ao banco de dados.");
			
			
		} catch(SQLException e) {
			System.out.println("--dados não inseridos ao banco de dados. " + e.getMessage());
			
		} 
		
	}
	
	public static void delete(int clienteId) {
		
	}
	
	public static List<Cliente> find(String pesquisa) {
		

		sql = String.format("SELECT * FROM clientes WHERE nome like '%s%%' OR cpf LIKE '%s%%'", pesquisa, pesquisa);
		List<Cliente> clientes = new ArrayList<Cliente>();
		
		try {
			
			Statement statement = connection.createStatement();
			ResultSet resultset = statement.executeQuery(sql);
			
			while (resultSet.next()) {
				
				Cliente cliente = new Cliente();
				
				cliente.setId(resultSet.getInt("id"));
				cliente.setNome(resultSet.getString("nome"));
				cliente.setNascimento(resultSet.getString("nascimento"));
				cliente.setCPF(resultSet.getString("cpf"));
				cliente.setRG(resultSet.getString("rg"));
				cliente.setEndereço(resultSet.getString("endereço"));
				cliente.setCEP(resultSet.getString("cep"));
				cliente.setCidade(resultSet.getString("cidade"));
				cliente.setTelefone(resultSet.getString("telefone"));
				cliente.setEmail(resultSet.getString("email"));
			
				clientes.add(cliente);
			}
			
			System.out.println("--procure correta dos clientes");
			return clientes;
			
		} catch(SQLException e) {}
		System.out.println("--procure incorreta dos clientes " + e.getMessage());
		return null;
		
	}
	
	public static Cliente findByPk(int clienteId) {
		return null;
		
	}
	
	public static void update(Cliente cliente) {
		
		
	}
}
	

