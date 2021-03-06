package controllers;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.ClienteDao;
import model.Cliente;


@WebServlet("/CreateAndFind")
public class ClienteCreateAndFind extends HttpServlet {
	private static final long serialVersionUID = 1L;

    
    public ClienteCreateAndFind() {
    	super();
       
    }

    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String pesquisa = request.getParameter("pesquisa");
		
		if(pesquisa == null) {
			pesquisa="";
			}
		
		List<Cliente> clientes = ClienteDao.find(pesquisa);
		
		
	}

	
	protected void doPost(jakarta.servlet.http.HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Cliente cliente = new Cliente();
		
		cliente.setNome(request.getParameter("nome"));
		cliente.setNascimento(request.getParameter("nascimento"));
		cliente.setCpf(request.getParameter("cpf"));
		cliente.setRg(request.getParameter("rg"));
		cliente.setEnderešo(request.getParameter("enderešo"));
		cliente.setCep(request.getParameter("cep"));
		cliente.setCidade(request.getParameter("cidade"));
		cliente.setTelefone(request.getParameter("telefone"));
		cliente.setEmail(request.getParameter("email"));
		
		ClienteDao.create(cliente);
		
		//doGet(request, response);
	}

}
