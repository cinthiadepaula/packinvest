using API.Model;

namespace API.Repositories
{
    public class RegisterRepository
    {
        private readonly List<KeyValueModel> _nomes = new()
        {
            new KeyValueModel { Id = 1, Nome = "João" },
            new KeyValueModel { Id = 2, Nome = "Maria" },
            new KeyValueModel { Id = 3, Nome = "Ana" }
        };

        public string GetNomeById(int id)
        {
            return _nomes.FirstOrDefault(n => n.Id == id)?.Nome;
        }
    }
}
