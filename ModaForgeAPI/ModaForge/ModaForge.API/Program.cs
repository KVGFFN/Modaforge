using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
using ModaForge.Application.Inferfaces;
using ModaForge.Application.Services;
using ModaForge.Infrastructure.Contexts;
using ModaForge.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);

//Fix CORS
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:8100")
                            .WithHeaders(HeaderNames.ContentType, "accessKey");
                      });
});

// Add services to the container.
builder.Services.AddDbContext<ModaForgeContext>(options => options.UseSqlServer("name=ConnectionStrings:ModaForgeDB"));
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IRequestService, RequestService>();
builder.Services.AddScoped<IRequestRepository, RequestRepository>();
builder.Services.AddScoped<IModelRepository, ModelRepository>();
builder.Services.AddScoped<IModelService, ModelService>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors(MyAllowSpecificOrigins);

app.Run();
