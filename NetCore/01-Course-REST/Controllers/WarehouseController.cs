using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Unosquare.Course.REST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WarehouseController : ControllerBase
    {
        public WarehouseController()
        {

        }

        [HttpGet("GetWarehouse")]
        public IActionResult GetWarehouse()
        {
            return Ok("Hello world!");
        }
    }
}
