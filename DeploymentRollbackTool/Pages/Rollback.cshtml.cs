using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DeploymentRollbackTool.Pages
{
    public class RollbackModel : PageModel
    {
        [BindProperty]
        public string SelectedVersion { get; set; } = string.Empty;

        public List<string> AvailableVersions { get; set; } = new() { "v1.0", "v1.1", "v1.2", "v2.0" };

        public List<string> DeploymentLogs { get; set; } = new();

        private readonly string logFilePath = "logs.txt";

        public void OnGet()
        {
            if (System.IO.File.Exists(logFilePath))
            {
                DeploymentLogs = System.IO.File.ReadAllLines(logFilePath).ToList();
            }
        }

        public IActionResult OnPost()
        {
            if (!string.IsNullOrWhiteSpace(SelectedVersion))
            {
                string log = $"Rolled back to {SelectedVersion} at {DateTime.Now:yyyy-MM-dd HH:mm:ss}";
                System.IO.File.AppendAllText(logFilePath, log + Environment.NewLine);
            }

            return RedirectToPage(new { rolledback = true });
        }

        public IActionResult OnPostClear()
        {
            if (System.IO.File.Exists(logFilePath))
            {
                System.IO.File.WriteAllText(logFilePath, string.Empty);
            }

            return RedirectToPage(new { cleared = true });
        }
    }
}
