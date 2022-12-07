using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModaForge.API.Controllers;
using ModaForge.Application.Inferfaces;
using ModaForge.Application.Services;
using ModaForge.Domain;
using ModaForge.Infrastructure.Contexts;
using ModaForge.Infrastructure.Repositories;
using Moq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.API.Controllers.Tests
{
    [TestClass()]
    public class RequestControllerTests
    {

        [TestMethod()]
        public void GetAllRequestsTest()
        {
            // Arrange
            var mockRequestService = new Mock<IRequestService>();
            var mockSearchParameters = new SearchParameters();

            // Set up the mock service to return a list of requests
            var requests = new List<Request> { new Request(), new Request() };
            mockRequestService
                .Setup(service => service.GetAll(mockSearchParameters))
                .Returns(requests);

            var controller = new RequestController(mockRequestService.Object);

            // Act
            var result = controller.GetAllRequests(mockSearchParameters);


            // Assert
            // Verify that the method returns an OkObjectResult with the expected requests
            Assert.IsInstanceOfType(result, typeof(OkObjectResult));
        }

        [TestMethod()]
        public void GetRequestTest()
        {
            // Arrange
            var mockRequestService = new Mock<IRequestService>();

            // Set up the mock service to return a list of requests
            var request = new Request { };
            mockRequestService
                .Setup(service => service.GetById(1))
                .Returns(request);

            var controller = new RequestController(mockRequestService.Object);

            var result = controller.GetRequest(1);
            Trace.Write(result);

        }
    }
}