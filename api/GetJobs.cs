using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api
{
    public class GetJobs
    {
        private readonly ILogger<GetJobs> _logger;

        public GetJobs(ILogger<GetJobs> logger)
        {
            _logger = logger;
        }

        [Function("GetJobs")]
        public IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");
            var data = new string[] { "Job 1", "Job 2", "Job 3" };
            return new OkObjectResult(data);
        }
    }
}
