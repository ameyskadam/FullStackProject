using Microsoft.EntityFrameworkCore;
using Project1.Models;

var builder = WebApplication.CreateBuilder(args);
var b = builder.Configuration.GetConnectionString("QHRMPRO");
builder.Services.AddDbContextPool<ProductContext>((op) => op.UseSqlServer(b));
builder.Services.AddCors((p) => p.AddDefaultPolicy(policy => policy.WithOrigins("*").AllowAnyHeader().AllowAnyMethod()));

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");
app.UseCors();

app.Run();
