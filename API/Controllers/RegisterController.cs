using Microsoft.AspNetCore.Mvc;
using API.Request;
using API.Services;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RegisterController : ControllerBase
    {
        private readonly RegisterService _service;

        public RegisterController()
        {
            _service = new RegisterService();
        }

        [HttpPost("calcular")]
        public ActionResult<CalcResponse> Calcular([FromBody] CalcRequest request)
        {
            try
            {
                var resultado = _service.CalcularParcelas(request);
                return Ok(resultado);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("consultar")]
        public ActionResult<string> Consultar([FromQuery] int id)
        {
            try
            {
                var nome = _service.ConsultarNome(id);
                return Ok(nome);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
