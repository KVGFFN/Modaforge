using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
using ModaForge.Application.Inferfaces;
using ModaForge.Application.Services;
using ModaForge.Infrastructure.Contexts;
using ModaForge.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);

//Fix CORS
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.
builder.Services.AddDbContext<ModaForgeContext>(options => options.UseSqlServer("name=ConnectionStrings:ModaForgeDB"));
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

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
