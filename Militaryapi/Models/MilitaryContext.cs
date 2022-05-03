#nullable disable
using Microsoft.EntityFrameworkCore;


namespace MilitaryApi.Models;

public class MilitaryContext : DbContext
{
    public MilitaryContext(DbContextOptions<MilitaryContext> options):base(options){}

    public DbSet<MilitaryApi.Models.Soldier> Soldiers { get; set; }
}
