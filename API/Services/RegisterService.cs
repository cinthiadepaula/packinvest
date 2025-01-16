using API.Repositories;
using API.Request;

namespace API.Services
{
    public class RegisterService
    {

        private readonly RegisterRepository _repository;

        public RegisterService()
        {
            _repository = new RegisterRepository();
        }

        public CalcResponse CalcularParcelas(CalcRequest request)
        {
            // Multiplica o número de parcelas pelo valor de cada parcela
            var totalSemJuros = request.Parcelas * request.Valor;

            // Calcula os 5% sobre o total
            var juros = totalSemJuros * 0.05m;

            // Adiciona os 5% ao total
            var totalComJuros = totalSemJuros + juros;

            // Retorna o resultado
            return new CalcResponse { Resultado = totalComJuros };
        }


        public string ConsultarNome(int id)
        {
            return _repository.GetNomeById(id) ?? throw new Exception("ID não encontrado.");
        }
    }
}
